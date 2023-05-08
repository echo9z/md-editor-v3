import { defineComponent, inject, ref } from 'vue';
import { prefix } from '~/config';
import { useAutoScroll, useCodeMirror } from './composition/index';
import { contentProps as props, ContentProps } from './props';
import ContentPreview from './ContentPreview';

export default defineComponent({
  name: 'MDEditorContent',
  props,
  setup(props: ContentProps) {
    const editorId = inject('editorId') as string;
    // 仅预览
    const previewOnly = inject('previewOnly') as boolean;

    const html = ref<string>('');

    // 输入框
    const { inputWrapperRef, codeMirrorUt } = useCodeMirror(props);
    // 自动滚动
    useAutoScroll(props, html, codeMirrorUt);

    return () => {
      return (
        <div class={`${prefix}-content`}>
          {!previewOnly && (
            <div class={`${prefix}-input-wrapper`} ref={inputWrapperRef}></div>
          )}

          {props.setting.preview && (
            <ContentPreview
              modelValue={props.value}
              setting={props.setting}
              onHtmlChanged={(html_) => {
                html.value = html_;
                props.onHtmlChanged(html_);
              }}
              onGetCatalog={props.onGetCatalog}
              mdHeadingId={props.mdHeadingId}
              noMermaid={props.noMermaid}
              sanitize={props.sanitize}
              noKatex={props.noKatex}
              formatCopiedText={props.formatCopiedText}
              noHighlight={props.noHighlight}
            />
          )}

          {props.setting.htmlPreview && (
            <div
              id={`${editorId}-html-wrapper`}
              class={`${prefix}-preview-wrapper`}
              key="html-preview-wrapper"
            >
              <div class={`${prefix}-html`}>{html.value}</div>
            </div>
          )}
        </div>
      );
    };
  }
});
