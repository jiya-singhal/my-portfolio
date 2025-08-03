
import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import python from '../assets/svg/skills/python.svg'
import git from '../assets/svg/skills/git.svg'
import defaultSVG from '../assets/svg/skills/defaultsvg.svg'


export const skillsData = [
  'Python',
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Node.js',
  'MongoDB',
  'MySQL',
  'Firebase',
  'Scikit-learn',
  'Pandas',
  'NumPy',
  'Hugging Face Transformers',
  'Sentence-BERT',
  'FAISS',
  'FuzzyWuzzy',
  'Librosa',
  'pydub',
  'Git',
  'GitHub',
  'Postman'
]

// ------------------------
// skillsImage Function
// ------------------------

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();

  switch (skillID) {
    case 'html': return html;
    case 'css': return css;
    case 'javascript': return javascript;
    case 'react': return react;
    case 'mongodb': return mongoDB;
    case 'mysql': return mysql;
    case 'firebase': return firebase;
    case 'python': return python;
    case 'numpy': return numpy;
    case 'git': return git;
    case 'github': return git;
    default:
      // Return defaultSVG for skills in skillsData that have no case
      const normalizedSkills = skillsData.map((s) => s.toLowerCase());
      if (normalizedSkills.includes(skillID)) {
        return defaultSVG;
      }
      return null;
  }
}
