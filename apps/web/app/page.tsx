import { getRegistryStats, getTemplates } from "../lib/registry";

const audienceLabels = {
  b2b: "B2B",
  b2c: "B2C",
  both: "B2B + B2C"
};

const statusLabels = {
  candidate: "候选",
  imported: "已导入"
};

const repositoryBaseUrl = "https://github.com/1lck/open-frontend-pages/tree/main";

export default function Home() {
  const templates = getTemplates();
  const stats = getRegistryStats(templates);
  const categories = Array.from(new Set(templates.map((template) => template.category))).sort();

  return (
    <main className="min-h-screen">
      <section className="border-b border-[var(--line)] px-6 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              Open Frontend Pages
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              可追踪许可证的开源前端页面库。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              精选可预览、可下载、可二次改造的开源前端模板，覆盖 Dashboard、
              Landing Page、电商流程、认证页面、AI 控制台和产品页面。每个条目都会记录
              上游来源、许可证、技术栈和导入状态，让复用代码前先把来源和授权说清楚。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)]">
            <Stat label="模板条目" value={stats.total} />
            <Stat label="已导入" value={stats.imported} />
            <Stat label="分类" value={stats.categories} />
            <Stat label="许可证" value={stats.licenses} />
          </div>
        </div>
      </section>

      <section className="px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {categories.map((category) => (
            <span
              className="border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5 text-sm capitalize text-[var(--muted)]"
              key={category}
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {templates.map((template) => (
            <article
              className="overflow-hidden border border-[var(--line)] bg-[var(--panel)]"
              key={template.slug}
            >
              <div className="aspect-[2/1] border-b border-[var(--line)] bg-[#e8e3d8]">
                {template.screenshot ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    alt={`${template.name} preview`}
                    className="h-full w-full object-cover object-top"
                    src={template.screenshot}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-8 text-center text-sm text-[var(--muted)]">
                    Screenshot pending
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                  <span>{audienceLabels[template.audience]}</span>
                  <span>·</span>
                  <span>{template.license}</span>
                  <span>·</span>
                  <span>{template.imported ? statusLabels.imported : statusLabels.candidate}</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold">{template.name}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{template.tags.join(", ")}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {template.preview ? (
                    <a
                      className="inline-flex border border-[var(--accent)] px-3 py-2 text-sm font-medium text-[var(--accent)]"
                      href={template.preview}
                      rel="noreferrer"
                      target="_blank"
                    >
                      预览
                    </a>
                  ) : null}
                  {template.repoPath ? (
                    <a
                      className="inline-flex border border-[var(--line)] px-3 py-2 text-sm font-medium"
                      href={`${repositoryBaseUrl}/${template.repoPath}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      源码
                    </a>
                  ) : null}
                  {template.download ? (
                    <a
                      className="inline-flex border border-[var(--line)] px-3 py-2 text-sm font-medium"
                      download
                      href={template.download}
                    >
                      下载
                    </a>
                  ) : null}
                  <a
                    className="inline-flex border border-[var(--line)] px-3 py-2 text-sm font-medium"
                    href={template.source}
                    rel="noreferrer"
                    target="_blank"
                  >
                    上游
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-[var(--panel)] p-5">
      <div className="text-3xl font-semibold">{value}</div>
      <div className="mt-2 text-sm text-[var(--muted)]">{label}</div>
    </div>
  );
}
