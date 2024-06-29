import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  PLATFORM_ID,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PageTitleComponent } from '@tsaitech/common/ui';

import { WebViewerService } from './webviewer.service';

@Component({
  selector: 'tsaitech-apryse-webviewer',
  standalone: true,
  imports: [CommonModule, PageTitleComponent],
  templateUrl: './apryse-webviewer.component.html',
  styleUrl: './apryse-webviewer.component.less',
  providers: [WebViewerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApryseWebViewerComponent {
  readonly #isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly #webViewerService = inject(WebViewerService);

  @ViewChild('webViewer', { read: ViewContainerRef })
  webViewerRef!: ViewContainerRef;

  readonly #effect = effect(() => {
    if (!this.#isBrowser) return;

    this.#webViewerService.init(this.webViewerRef).then((instance) => {
      const { UI, Core } = instance;
      const { documentViewer, annotationManager, Annotations } = Core;

      documentViewer.addEventListener('documentLoaded', () => {
        documentViewer.zoomTo(1);

        const createTextAnnotation = (
          pageNumber: number,
          x: number,
          y: number,
          width: number,
          height: number,
          text: string
        ) => {
          // Создаем текстовую аннотацию
          const annotation = new Annotations.FreeTextAnnotation();
          annotation.PageNumber = pageNumber;
          annotation.X = x;
          annotation.Y = y;
          annotation.Width = width;
          annotation.Height = height;
          annotation.setContents(text);
          annotation.FontSize = '20pt';
          annotation.FillColor = new Annotations.Color(255, 255, 255, 0); // Прозрачный фон
          annotation.TextColor = new Annotations.Color(0, 0, 0); // Черный текст
          annotation.StrokeThickness = 0;
          annotation.Author = annotationManager.getCurrentUser();
          annotation.Locked = true;

          // Добавляем аннотацию в документ
          annotationManager.addAnnotation(annotation);
          annotationManager.redrawAnnotation(annotation);
        };

        documentViewer.getAnnotationsLoadedPromise().then(() => {
          createTextAnnotation(1, 100, 100, 200, 50, 'EDITABLE');

          documentViewer.refreshAll();
          documentViewer.updateView();
        });
      });

      instance.UI.loadDocument(
        'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf'
      );
    });
  });
}
