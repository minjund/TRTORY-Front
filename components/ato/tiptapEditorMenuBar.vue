<template>
  <div>
    <template v-for="(item, index) in items">
      <div
        class="divider"
        v-if="item.type === 'divider'"
        :key="`divider${index}`" />
      <ato-tiptap-editor-menu-item v-else :key="index" v-bind="item" />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  editor: {
    type: Object,
    required: true,
  },
})

const items = ref([
  {
    icon: 'bold',
    title: 'Bold',
    action: () => props.editor.chain().focus().toggleBold().run(),
    // isActive: () => props.editor.isActive('bold'),
  },
  {
    icon: 'italic',
    title: 'Italic',
    action: () => props.editor.chain().focus().toggleItalic().run(),
    // isActive: () => props.editor.isActive('italic'),
  },
  {
    icon: 'strikethrough',
    title: 'Strike',
    action: () => props.editor.chain().focus().toggleStrike().run(),
    // isActive: () => props.editor.isActive('strike'),
  },
  {
    icon: 'code-view',
    title: 'Code',
    action: () => props.editor.chain().focus().toggleCode().run(),
    // isActive: () => props.editor.isActive('code'),
  },
  {
    icon: 'h-1',
    title: 'Heading 1',
    action: () =>
      props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
    // isActive: () => props.editor.isActive('heading', { level: 1 }),
  },
  {
    icon: 'h-2',
    title: 'Heading 2',
    action: () =>
      props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
    // isActive: () => props.editor.isActive('heading', { level: 2 }),
  },
  {
    icon: 'align-left',
    title: 'align-left',
    action: () => props.editor.chain().focus().setTextAlign('left').run(),
    // isActive: () => props.editor.isActive('heading', { level: 2 }),
  },
  {
    icon: 'align-center',
    title: 'align-center',
    action: () => props.editor.chain().focus().setTextAlign('center').run(),
    // isActive: () => props.editor.isActive('heading', { level: 2 }),
  },
  {
    icon: 'align-right',
    title: 'align-right',
    action: () => props.editor.chain().focus().setTextAlign('right').run(),
    // isActive: () => props.editor.isActive('heading', { level: 2 }),
  },
  {
    icon: 'align-justify',
    title: 'align-justify',
    action: () => props.editor.chain().focus().setTextAlign('justify').run(),
    // isActive: () => props.editor.isActive('heading', { level: 2 }),
  },
  {
    icon: 'paragraph',
    title: 'Paragraph',
    action: () => props.editor.chain().focus().setParagraph().run(),
    // isActive: () => props.editor.isActive('paragraph'),
  },
  {
    icon: 'list-unordered',
    title: 'Bullet List',
    action: () => props.editor.chain().focus().toggleBulletList().run(),
    // isActive: () => props.editor.isActive('bulletList'),
  },
  {
    icon: 'list-ordered',
    title: 'Ordered List',
    action: () => props.editor.chain().focus().toggleOrderedList().run(),
    // isActive: () => props.editor.isActive('orderedList'),
  },
  {
    icon: 'list-check-2',
    title: 'Task List',
    action: () => props.editor.chain().focus().toggleTaskList().run(),
    // isActive: () => props.editor.isActive('taskList'),
  },
  {
    icon: 'code-box-line',
    title: 'Code Block',
    action: () => props.editor.chain().focus().toggleCodeBlock().run(),
    // isActive: () => props.editor.isActive('codeBlock'),
  },
  {
    icon: 'double-quotes-l',
    title: 'Blockquote',
    action: () => props.editor.chain().focus().toggleBlockquote().run(),
    // isActive: () => props.editor.isActive('blockquote'),
  },
  {
    icon: 'separator',
    title: 'Horizontal Rule',
    action: () => props.editor.chain().focus().setHorizontalRule().run(),
  },
  {
    icon: 'text-wrap',
    title: 'Hard Break',
    action: () => props.editor.chain().focus().setHardBreak().run(),
  },
])
</script>

<style lang="scss">
.divider {
  background-color: rgba(#fff, 0.25);
  height: 1.25rem;
  margin-left: 0.5rem;
  margin-right: 0.75rem;
  width: 1px;
}
</style>
