<script lang="ts">
    export let data: {
    id: number;
    userId: number;
    createdAt: number;
    postId: number;
    content: string | null;
};
</script>

<div class="chat chat-start">
    <div class="chat-header">{data.userId}</div>
    <div class="chat-bubble">{data.content}</div>
</div>
