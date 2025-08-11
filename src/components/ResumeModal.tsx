// 'use client'

import { Modal } from '@/components/Modal'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
  resume: any | null
}

export function ResumeModal({ isOpen, onClose, resume }: ResumeModalProps) {
  if (!resume) return null
  const basics = resume.basics ?? {}
  const work = Array.isArray(resume.work) ? resume.work : []
  const education = Array.isArray(resume.education) ? resume.education : []
  const skills = Array.isArray(resume.skills) ? resume.skills : []
  const projects = Array.isArray(resume.projects) ? resume.projects : []
  const certificates = Array.isArray(resume.certificates || resume.certifications)
    ? (resume.certificates || resume.certifications)
    : []
  const awards = Array.isArray(resume.awards) ? resume.awards : []
  const publications = Array.isArray(resume.publications) ? resume.publications : []
  const languages = Array.isArray(resume.languages) ? resume.languages : []
  const interests = Array.isArray(resume.interests) ? resume.interests : []
  const volunteer = Array.isArray(resume.volunteer) ? resume.volunteer : []
  const projects2 = Array.isArray(resume.projects) ? resume.projects : []
  const certificates2 = Array.isArray(resume.certificates || resume.certifications) ? (resume.certificates || resume.certifications) : []
  const awards2 = Array.isArray(resume.awards) ? resume.awards : []
  const publications2 = Array.isArray(resume.publications) ? resume.publications : []
  const languages2 = Array.isArray(resume.languages) ? resume.languages : []
  const interests2 = Array.isArray(resume.interests) ? resume.interests : []
  const volunteer2 = Array.isArray(resume.volunteer) ? resume.volunteer : []

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${basics.name || 'Resume'}`}>
      <div className="space-y-6 text-sm text-neutral-800 max-h-[70vh] overflow-y-auto">
        <section>
          {basics.label && (
            <h3 className="font-semibold text-neutral-950">{basics.label}</h3>
          )}
          {basics.summary && (
            <p className="mt-2 whitespace-pre-line text-neutral-700">{basics.summary}</p>
          )}
          {(basics.profiles || basics.url) && (
            <div className="mt-3 flex flex-wrap gap-3 text-neutral-600">
              {basics.url && (
                <a
                  className="underline hover:text-[#31b9fd]"
                  href={basics.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              )}
              {Array.isArray(basics.profiles) && basics.profiles.map((p: any, idx: number) => (
                <a
                  key={idx}
                  className="underline hover:text-[#31b9fd]"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.network}
                </a>
              ))}
            </div>
          )}
        </section>

        {work.length > 0 && (
          <section>
            <h4 className="font-semibold text-neutral-950">Experience</h4>
            <ul className="mt-3 space-y-3">
              {work.map((job: any, idx: number) => (
                <li key={idx} className="rounded-xl border border-neutral-200 p-3">
                  <p className="font-medium text-neutral-900">
                    {(job.position || job.role) && (
                      <>
                        {job.position || job.role}
                        {job.name ? ' @ ' : ''}
                      </>
                    )}
                    {job.name}
                  </p>
                  {(job.startDate || job.endDate) && (
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {job.startDate || '—'} — {job.endDate || 'Present'}
                    </p>
                  )}
                  {job.summary && (
                    <p className="text-sm text-neutral-700 mt-2">{job.summary}</p>
                  )}
                  {Array.isArray(job.highlights) && job.highlights.length > 0 && (
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-700">
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
            <h4 className="font-semibold text-neutral-950">Education</h4>
            <ul className="mt-3 space-y-3">
              {education.map((ed: any, idx: number) => (
                <li key={idx} className="rounded-xl border border-neutral-200 p-3">
                  <p className="font-medium text-neutral-900">
                    {ed.studyType ? `${ed.studyType}` : ''}
                    {ed.area ? ` in ${ed.area}` : ''}
                    {ed.institution ? ` — ${ed.institution}` : ''}
                  </p>
                  {(ed.startDate || ed.endDate) && (
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {ed.startDate || '—'} — {ed.endDate || 'Present'}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {skills.length > 0 && (
          <section>
            <h4 className="font-semibold text-neutral-950">Skills</h4>
            {skills.map((s: any, idx: number) => (
              <div key={idx} className="mt-3">
                <p className="font-medium text-neutral-900">{s.name || s.keyword || 'Skills'}</p>
                {Array.isArray(s.keywords) ? (
                  <ul className="mt-1 flex flex-wrap gap-2">
                    {s.keywords.map((kw: string, i: number) => (
                      <li key={i} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">{kw}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-1">
                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 inline-block">
                      {s.name || s}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {projects2.length > 0 && (
          <section>
            <h4 className="font-semibold text-neutral-950">Projects</h4>
            <ul className="mt-3 space-y-3">
              {projects2.map((p: any, idx: number) => (
                <li key={idx} className="rounded-xl border border-neutral-200 p-3">
                  <p className="font-medium text-neutral-900">
                    {p.name}
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="ml-2 underline text-neutral-700 hover:text-[#31b9fd]">
                        Link
                      </a>
                    )}
                  </p>
                  {p.description && <p className="text-sm text-neutral-700 mt-1">{p.description}</p>}
                  {p.summary && <p className="text-sm text-neutral-700 mt-1">{p.summary}</p>}
                  {Array.isArray(p.highlights) && p.highlights.length > 0 && (
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-700">
                      {p.highlights.map((h: string, i: number) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                  {Array.isArray(p.keywords) && p.keywords.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.keywords.map((kw: string, i: number) => (
                        <span key={i} className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs">{kw}</span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {certificates2.length > 0 && (
          <section>
            <h4 className="font-semibold text-neutral-950">Certificates</h4>
            <ul className="mt-3 space-y-2">
              {certificates2.map((c: any, idx: number) => (
                <li key={idx} className="text-sm">
                  <span className="font-medium text-neutral-900">{c.name || c.title}</span>
                  {c.issuer && <span className="text-neutral-600"> — {c.issuer}</span>}
                  {(c.date || c.startDate) && (
                    <span className="text-neutral-500"> ({c.date || c.startDate}{c.endDate ? ` — ${c.endDate}` : ''})</span>
                  )}
                  {c.url && (
                    <a className="ml-2 underline text-neutral-700 hover:text-[#31b9fd]" href={c.url} target="_blank" rel="noopener noreferrer">Link</a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {awards2.length > 0 && (
          <section>
            <h4 className="font-semibold text-neutral-950">Awards</h4>
            <ul className="mt-3 space-y-2">
              {awards2.map((a: any, idx: number) => (
                <li key={idx} className="text-sm">
                  <span className="font-medium text-neutral-900">{a.title}</span>
                  {a.awarder && <span className="text-neutral-600"> — {a.awarder}</span>}
                  {a.date && <span className="text-neutral-500"> ({a.date})</span>}
                  {a.summary && <p className="text-neutral-700">{a.summary}</p>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {publications2.length > 0 && (
          <section>
            <h4 className="font-semibold text-neutral-950">Publications</h4>
            <ul className="mt-3 space-y-2">
              {publications2.map((p: any, idx: number) => (
                <li key={idx} className="text-sm">
                  <span className="font-medium text-neutral-900">{p.name || p.title}</span>
                  {p.publisher && <span className="text-neutral-600"> — {p.publisher}</span>}
                  {p.releaseDate && <span className="text-neutral-500"> ({p.releaseDate})</span>}
                  {p.url && (
                    <a className="ml-2 underline text-neutral-700 hover:text-[#31b9fd]" href={p.url} target="_blank" rel="noopener noreferrer">Link</a>
                  )}
                  {p.summary && <p className="text-neutral-700">{p.summary}</p>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {(languages2.length > 0 || interests2.length > 0) && (
          <section>
            <h4 className="font-semibold text-neutral-950">Other</h4>
            {languages2.length > 0 && (
              <div className="mt-2">
                <p className="font-medium text-neutral-900">Languages</p>
                <ul className="mt-1 flex flex-wrap gap-2">
                  {languages2.map((l: any, i: number) => (
                    <li key={i} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                      {l.language}{l.fluency ? ` — ${l.fluency}` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {interests2.length > 0 && (
              <div className="mt-3">
                <p className="font-medium text-neutral-900">Interests</p>
                <ul className="mt-1 flex flex-wrap gap-2">
                  {interests2.map((it: any, i: number) => (
                    <li key={i} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                      {it.name || it}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {volunteer2.length > 0 && (
          <section>
            <h4 className="font-semibold text-neutral-950">Volunteer</h4>
            <ul className="mt-3 space-y-3">
              {volunteer2.map((v: any, idx: number) => (
                <li key={idx} className="rounded-xl border border-neutral-200 p-3">
                  <p className="font-medium text-neutral-900">{v.position} {v.organization ? `@ ${v.organization}` : ''}</p>
                  {(v.startDate || v.endDate) && (
                    <p className="text-xs text-neutral-500 mt-0.5">{v.startDate || '—'} — {v.endDate || 'Present'}</p>
                  )}
                  {v.summary && <p className="text-sm text-neutral-700 mt-2">{v.summary}</p>}
                  {Array.isArray(v.highlights) && v.highlights.length > 0 && (
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-700">
                      {v.highlights.map((h: string, i: number) => (
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
    </Modal>
  )
}


