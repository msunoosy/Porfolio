import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    
    <section id='skills' className={styles.container}>
        <h1 className="sectionTitle">SKILLS</h1>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skills="CSS"/>
        <SkillList src={checkMarkIcon} skills="JavaScript"/>
        <SkillList src={checkMarkIcon} skills="TypeScript"/>
        <SkillList src={checkMarkIcon} skills="Node"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skills="REACT"/>
        <SkillList src={checkMarkIcon} skills="ANGULAR"/>
        <SkillList src={checkMarkIcon} skills="VUE"/>
        <SkillList src={checkMarkIcon} skills="TAILWIND CSS"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skills="REDUX"/>
        <SkillList src={checkMarkIcon} skills="WEBPACK"/>
        <SkillList src={checkMarkIcon} skills="GIT"/>
        <SkillList src={checkMarkIcon} skills="JEST"/>
        <SkillList src={checkMarkIcon} skills="BOOTSTRAP"/>
        </div>
    </section>

  )
}

export default Skills