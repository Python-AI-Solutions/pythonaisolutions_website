// 'use client'

import Image from 'next/image'

type Resume = any

export function NoStringsResume({
  resume,
  photoSrc,
}: {
  resume: Resume
  photoSrc?: string
}) {
  const basics = resume?.basics ?? {}
  const work = Array.isArray(resume?.work) ? resume.work : []
  const education = Array.isArray(resume?.education) ? resume.education : []
  const skills = Array.isArray(resume?.skills) ? resume.skills : []
  const projects = Array.isArray(resume?.projects) ? resume.projects : []
  const profiles = Array.isArray(basics?.profiles) ? basics.profiles : []

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-neutral-200 bg-neutral-50 p-4 sm:p-6">
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-white">
          {photoSrc ? (
            <Image
              src={photoSrc}
              alt={basics?.name || 'Photo'}
              width={64}
              height={64}
              className="h-16 w-16 object-cover"
              unoptimized
            />
          ) : (
            <span className="text-sm font-semibold text-neutral-600">
              {(basics?.name || 'NA')
                .split(' ')
                .map((n: string) => n[0])
                .slice(0, 2)
                .join('')}
            </span>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-neutral-900">
            {basics?.name}
          </h3>
          <p className="text-sm text-neutral-600">{basics?.label}</p>
          {profiles.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {profiles.map((p: any, idx: number) => (
                <a
                  key={idx}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-neutral-200 px-2 py-0.5 text-xs text-neutral-700 hover:border-[#31b9fd] hover:text-[#31b9fd]"
                >
                  {p.network}
                </a>
              ))}
              {basics?.url && (
                <a
                  href={basics.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-neutral-200 px-2 py-0.5 text-xs text-neutral-700 hover:border-[#31b9fd] hover:text-[#31b9fd]"
                >
                  Website
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 p-4 sm:p-6">
        {basics?.summary && (
          <section>
            <h4 className="text-sm font-semibold text-neutral-900">Summary</h4>
            <p className="mt-2 whitespace-pre-line text-sm text-neutral-700">
              {basics.summary}
            </p>
          </section>
        )}

        {work.length > 0 && (
          <section>
            <h4 className="text-sm font-semibold text-neutral-900">
              Experience
            </h4>
            <ul className="mt-2 space-y-3">
              {work.map((job: any, idx: number) => (
                <li
                  key={idx}
                  className="rounded-xl border border-neutral-200 p-3"
                >
                  <div className="text-sm font-medium text-neutral-900">
                    {(job.position || job.role) ?? ''}
                    {job.name ? ` @ ${job.name}` : ''}
                  </div>
                  {(job.startDate || job.endDate) && (
                    <div className="mt-0.5 text-xs text-neutral-500">
                      {job.startDate || '—'} — {job.endDate || 'Present'}
                    </div>
                  )}
                  {job.summary && (
                    <p className="mt-2 text-sm text-neutral-700">
                      {job.summary}
                    </p>
                  )}
                  {Array.isArray(job.highlights) &&
                    job.highlights.length > 0 && (
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                        {job.highlights.map((h: string, i: number) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {education.length > 0 && (
          <section>
            <h4 className="text-sm font-semibold text-neutral-900">
              Education
            </h4>
            <ul className="mt-2 space-y-3">
              {education.map((ed: any, idx: number) => (
                <li
                  key={idx}
                  className="rounded-xl border border-neutral-200 p-3 text-sm text-neutral-800"
                >
                  <div className="font-medium">
                    {ed.studyType}
                    {ed.area ? ` in ${ed.area}` : ''}
                  </div>
                  <div className="text-neutral-600">{ed.institution}</div>
                  {(ed.startDate || ed.endDate) && (
                    <div className="mt-0.5 text-xs text-neutral-500">
                      {ed.startDate || '—'} — {ed.endDate || 'Present'}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {skills.length > 0 && (
          <section>
            <h4 className="text-sm font-semibold text-neutral-900">Skills</h4>
            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {skills.map((s: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl border border-neutral-200 p-3"
                >
                  <div className="text-sm font-medium text-neutral-900">
                    {s.name || s.keyword || 'Skills'}
                  </div>
                  {Array.isArray(s.keywords) && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {s.keywords.map((kw: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section>
            <h4 className="text-sm font-semibold text-neutral-900">Projects</h4>
            <ul className="mt-2 space-y-3">
              {projects.map((p: any, idx: number) => (
                <li
                  key={idx}
                  className="rounded-xl border border-neutral-200 p-3"
                >
                  <div className="text-sm font-medium text-neutral-900">
                    {p.name}
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-neutral-700 underline hover:text-[#31b9fd]"
                      >
                        Link
                      </a>
                    )}
                  </div>
                  {p.description && (
                    <p className="mt-1 text-sm text-neutral-700">
                      {p.description}
                    </p>
                  )}
                  {Array.isArray(p.highlights) && p.highlights.length > 0 && (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                      {p.highlights.map((h: string, i: number) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  )
}
