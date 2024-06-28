import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import WebViewer from '@pdftron/webviewer';
import { TuiTitleModule } from '@taiga-ui/experimental';

@Component({
  selector: 'tsaitech-apryse-webviewer',
  standalone: true,
  imports: [CommonModule, TuiTitleModule],
  templateUrl: './apryse-webviewer.component.html',
  styleUrl: './apryse-webviewer.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApryseWebViewerComponent {
  @ViewChild('webViewer', { read: ViewContainerRef })
  webViewerRef!: ViewContainerRef;

  readonly #effect = effect(() => {
    WebViewer.WebComponent(
      {
        path: '/assets/webviewer',
        disabledElements: [
          'toolbarGroup-Shapes',
          'toolbarGroup-Insert',
          'toolbarGroup-Annotate',
          'toolbarGroup-Forms',
          'toolbarGroup-FillAndSign',
          'toolbarGroup-Edit',
        ],
      },
      this.webViewerRef.element.nativeElement
    ).then((instance) => {
      const { UI, Core } = instance;
      const { documentViewer, annotationManager, Annotations } = Core;

      documentViewer.addEventListener('documentLoaded', () => {
        console.log('Document loaded');

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

          console.log('FreeTextAnnotation created:', annotation);
        };

        documentViewer.getAnnotationsLoadedPromise().then(() => {
          console.log('Annotations loaded');

          setTimeout(() => {
            // Создаем текстовые аннотации в заранее определенных местах
            createTextAnnotation(1, 100, 100, 200, 50, 'EDITABLE');

            // Перерисовываем все аннотации на странице
            documentViewer.refreshAll();
            documentViewer.updateView();

            // Проверяем, добавлены ли аннотации в DOM
            setTimeout(() => {
              const annotations = annotationManager.getAnnotationsList();
              console.log('Annotations in DOM:', annotations);
            }, 500);
          }, 1000); // Задержка в 1 секунду
        });
      });

      instance.UI.loadDocument(
        'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf'
      );
    });
  });
}
