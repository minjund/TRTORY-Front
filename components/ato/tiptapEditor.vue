<script setup>
import { TiptapCollabProvider } from '@hocuspocus/provider'
import { Collaboration } from '@tiptap/extension-collaboration'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import * as Y from 'yjs'
import { onMounted, onUnmounted } from 'vue'

let provider = TiptapCollabProvider | undefined

const doc = new Y.Doc()

onMounted(() => {
  provider = new TiptapCollabProvider({
    name: 'TRTORY', // any identifier - all connections sharing the same identifier will be synced
    appId: 'pkr7q5m4', // replace with YOUR_APP_ID
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDE5NjQxODEsIm5iZiI6MTcwMTk2NDE4MSwiZXhwIjoxNzAyMDUwNTgxLCJpc3MiOiJodHRwczovL2NvbGxhYi50aXB0YXAuZGV2IiwiYXVkIjoicGtyN3E1bTQifQ.Mot_Wh9Pb9yL7oN6LrbPfsv3mKQh3ymNRRMMr9kzMVc', // replace with your JWT
    document: doc,
  })
})

onUnmounted(() => provider?.destroy())

const editor = useEditor({
  // make sure that you don't use `content` property anymore!
  // If you want to add default content, feel free to just write text to the tiptap editor (i.e. editor.setContent (https://tiptap.dev/api/commands/set-content), but make sure that
  // you do this only once per document, otherwise the content will
  // be added again, and again, and again ..
  editorProps: {
    attributes: {
      class: 'm-2 p-2 border border-black rounded-lg',
    },
  },
  extensions: [
    StarterKit.configure({
      history: false, // important because history will now be handled by Y.js
    }),
    Collaboration.configure({
      document: doc,
    }),
  ],
})
</script>

<template>
  <editor-content :editor="editor"></editor-content>
</template>
<style lang="scss"></style>
