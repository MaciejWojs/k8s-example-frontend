<script setup lang="ts">
defineProps<{
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}>();
</script>

<template>
    <article class="post">
        <header class="post-header">
            <span class="post-badge">Post</span>
            <h2 class="post-title">{{ title }}</h2>
        </header>

        <div class="post-content">
            {{ content }}
        </div>

        <footer class="post-meta">
            <ClientOnly>
                <div class="meta-item">
                    <span class="meta-label">Utworzono</span>
                    <time>{{ createdAt }}</time>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Zaktualizowano</span>
                    <time>{{ updatedAt }}</time>
                </div>
            </ClientOnly>
        </footer>
    </article>
</template>

<style scoped>
.post {
    position: relative;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    padding: 1.75rem 1.75rem 1.5rem 2rem;
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(148, 163, 184, 0.25);
    border-radius: 1.25rem;
    box-shadow:
        0 1px 2px rgba(15, 23, 42, 0.04),
        0 12px 32px rgba(15, 23, 42, 0.06);
    backdrop-filter: blur(8px);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.post::before {
    content: "";
    position: absolute;
    top: 1.25rem;
    bottom: 1.25rem;
    left: 0;
    width: 4px;
    border-radius: 0 4px 4px 0;
    background: linear-gradient(180deg, #10b981 0%, #059669 100%);
}

.post:hover {
    transform: translateY(-2px);
    border-color: rgba(16, 185, 129, 0.25);
    box-shadow:
        0 2px 4px rgba(15, 23, 42, 0.05),
        0 20px 40px rgba(16, 185, 129, 0.12);
}

.post-header {
    margin-bottom: 1rem;
}

.post-badge {
    display: inline-block;
    margin-bottom: 0.75rem;
    padding: 0.25rem 0.65rem;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #059669;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 999px;
}

.post-title {
    margin: 0;
    font-size: clamp(1.25rem, 2.5vw, 1.6rem);
    font-weight: 700;
    line-height: 1.3;
    color: #0f172a;
    letter-spacing: -0.02em;
    overflow-wrap: anywhere;
    word-break: break-word;
}

.post-content {
    margin: 0 0 1.5rem;
    font-size: 1rem;
    line-height: 1.75;
    color: #475569;
    overflow-wrap: anywhere;
    word-break: break-word;
}

.post-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.5rem;
    padding-top: 1.25rem;
    border-top: 1px solid rgba(148, 163, 184, 0.2);
}

.meta-item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.meta-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #94a3b8;
}

.meta-item time {
    font-size: 0.875rem;
    font-weight: 500;
    color: #64748b;
}
</style>
