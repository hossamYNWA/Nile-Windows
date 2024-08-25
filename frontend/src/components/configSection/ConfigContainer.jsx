import ConfigBody from './ConfigBody.jsx'
import ConfigHead from './ConfigHead.jsx'
import classes from './configContainer.module.css'
// Combine ConfigBody and ConfigHeader in one container component
const ConfigContainer = ({ title, options, index }) => {
  return (
    <div  className={classes.configContainer}>
      <ConfigHead title={title} />
      <ConfigBody title={title} options={options} index={index}/>
    </div>
  )
}

export default ConfigContainer
