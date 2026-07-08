<script setup lang="ts">
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl

const { data: posts, error, pending } = useFetch<any[]>(`${baseUrl}/api/v1/posts`, {
    server: false,
    default: () => [],
})
</script>

<template>
    <main class="page">
        <header class="page-header">
            <p class="page-eyebrow">Blog</p>
            <h1 class="page-title">Posty</h1>
            <p class="page-subtitle">
                Przeglądaj najnowsze wpisy i aktualizacje.
            </p>
        </header>

        <section v-if="pending" class="empty-state">
            <div class="empty-icon" aria-hidden="true">⏳</div>
            <h2>Ładowanie…</h2>
            <p>Pobieranie wpisów, chwileczkę.</p>
        </section>

        <section v-else-if="error" class="error-state">
            <div class="error-icon" aria-hidden="true">⚠️</div>
            <h2>Nie udało się pobrać artykułów</h2>
            <p>Wystąpił problem podczas ładowania wpisów. Spróbuj ponownie później.</p>
        </section>

        <section v-else-if="posts.length === 0" class="empty-state">
            <div class="empty-icon" aria-hidden="true">📝</div>
            <h2>Brak postów</h2>
            <p>Nie ma jeszcze żadnych wpisów do wyświetlenia.</p>
        </section>

        <section v-else class="posts-list">
            <p class="posts-count">
                {{ posts.length }}
                {{ posts.length === 1 ? 'post' : 'posty' }}
            </p>

            <Post
                v-for="post in posts"
                :key="post.id"
                :id="post.id"
                :title="post.title"
                :content="post.content"
                :createdAt="new Date(post.createdAt).toLocaleString('pl-PL')"
                :updatedAt="new Date(post.updatedAt).toLocaleString('pl-PL')"
            />
        </section>
    </main>
</template>

<style scoped>
.page {
    min-height: 100vh;
    padding: 3rem 1.25rem 4rem;
    background:
        radial-gradient(circle at top left, rgba(16, 185, 129, 0.12), transparent 40%),
        radial-gradient(circle at top right, rgba(34, 197, 94, 0.1), transparent 35%),
        linear-gradient(180deg, #f8fafc 0%, #ecfdf5 100%);
}

.page-header {
    max-width: 720px;
    margin: 0 auto 2.5rem;
    text-align: center;
}

.page-eyebrow {
    margin: 0 0 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #059669;
}

.page-title {
    margin: 0 0 0.75rem;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #0f172a;
}

.page-subtitle {
    margin: 0;
    max-width: 36ch;
    margin-inline: auto;
    font-size: 1.05rem;
    line-height: 1.6;
    color: #64748b;
}

.empty-state {
    max-width: 420px;
    margin: 4rem auto 0;
    padding: 2.5rem 2rem;
    text-align: center;
    background: rgba(255, 255, 255, 0.85);
    border: 1px dashed rgba(148, 163, 184, 0.5);
    border-radius: 1.25rem;
}

.empty-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.empty-state h2 {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
    color: #0f172a;
}

.empty-state p {
    margin: 0;
    color: #64748b;
    line-height: 1.6;
}

.error-state {
    max-width: 420px;
    margin: 4rem auto 0;
    padding: 2.5rem 2rem;
    text-align: center;
    background: rgba(254, 242, 242, 0.85);
    border: 1px dashed rgba(248, 113, 113, 0.5);
    border-radius: 1.25rem;
}

.error-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.error-state h2 {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
    color: #b91c1c;
}

.error-state p {
    margin: 0;
    color: #7f1d1d;
    line-height: 1.6;
}

.posts-list {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.posts-count {
    margin: 0 0 0.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}
</style>
