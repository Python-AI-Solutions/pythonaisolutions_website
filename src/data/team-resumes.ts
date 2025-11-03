// Import team resume data from submodule
import johnLeeData from '../../submodules/the-team/resumes/json/john_lee.json'
import sumitJhaData from '../../submodules/the-team/resumes/json/sumit_jha.json'
import heetShahData from '../../submodules/the-team/resumes/json/heet_shah.json'
import chevulaJeevanData from '../../submodules/the-team/resumes/json/chevula_jeevan.json'
import adityaPataneData from '../../submodules/the-team/resumes/json/aditya_patane.json'

export const teamResumes = {
  johnLee: johnLeeData,
  sumitJha: sumitJhaData,
  heetShah: heetShahData,
  chevulaJeevan: chevulaJeevanData,
  adityaPatane: adityaPataneData,
}

// Export photo paths from submodule - these will be validated at build time
// All images should be in WebP format in the submodule
export const teamPhotos = {
  'John Lee': '/submodules/the-team/public/photos/John-Lee.webp',
  'Sumit Jha': '/submodules/the-team/public/photos/Sumit_Jha.webp',
  'Heet Shah': '/submodules/the-team/public/photos/Heet_Shah.webp',
  'Chevula Jeevan': '/submodules/the-team/public/photos/Chevula_Jeevan.webp',
  'Aditya Patane': '/submodules/the-team/public/photos/Aditya_Patane.webp',
}
