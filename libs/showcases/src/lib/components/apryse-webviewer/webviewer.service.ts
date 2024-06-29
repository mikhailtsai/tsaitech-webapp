import { Injectable, ViewContainerRef } from '@angular/core';
import WebViewer from '@pdftron/webviewer';

@Injectable()
export class WebViewerService {
  init(webViewerRef: ViewContainerRef) {
    return WebViewer.WebComponent(
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
      webViewerRef.element.nativeElement
    );
  }
}
