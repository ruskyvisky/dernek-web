import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Duyurular | Edirne Çocuk Hakları Derneği',
  description: 'Dernek duyuruları, haberler ve güncel gelişmeler.',
};

async function getPosts() {
  const res = await fetch(
    'https://wp.echd.org.tr/wp-json/wp/v2/posts?categories=4&_embed', // 6: Duyurular kategorisi ID'si
   
  );
  if (!res.ok) throw new Error('Veri alınamadı');
  return res.json();
}

export default async function DuyurularPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Duyurular
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg">
              Derneğimizden haberler, duyurular ve güncel gelişmeler
            </p>
          </div>

          {/* Duyuru Listesi */}
          <div className="space-y-8">
            {posts.map((post: any) => {
              const featured =
                post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null;
              const link = post.meta?._links_to || post.link;

              return (
                <a
                  key={post.id}
                 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all"
                >
                  {/* Üst Kısım */}
                  <div className="flex items-center gap-3 mb-4">
                    
                    <span className="text-gray-500">
                      {new Date(post.date).toLocaleDateString('tr-TR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Başlık */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {post.title.rendered}
                  </h3>

                  {/* Öne çıkan görsel (opsiyonel) */}
                  {featured && (
                    <div className="mb-4 rounded-xl overflow-hidden">
                      <img
                        src={featured}
                        alt={post.title.rendered}
                        className="w-full h-60 object-cover"
                      />
                    </div>
                  )}

                  {/* İçerikten kısa özet */}
                  <p
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered,
                    }}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
