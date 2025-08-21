import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Basında Biz | Edirne Çocuk Hakları Derneği',
  description: 'Basında çıkan haberlerimiz ve medya yansımalarımız.',
};

async function getPosts() {
  const res = await fetch(
    'https://wp.echd.org.tr/wp-json/wp/v2/posts?categories=5&_embed',

  );
  if (!res.ok) throw new Error('Veri alınamadı');
  return res.json();
}

export default async function BasindaBizPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Basında Biz
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg">
              Medyada yer alan haberlerimiz ve faaliyetlerimiz
            </p>
          </div>

          {/* Haber Kartları */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => {
              const featured =
                post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null;
              const link = post.meta?._links_to || post.link; // Page Links To eklentisi varsa
              return (
                <a
                  key={post.id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 block"
                >
                  {featured ? (
                    <div className="h-48 w-full">
                      <img
                        src={featured}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-400"></div>
                  )}
                  <div className="p-6">
                    <span className="text-sm text-purple-600 font-medium">
                      {new Date(post.date).toLocaleDateString('tr-TR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                      {post.title.rendered}
                    </h3>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
