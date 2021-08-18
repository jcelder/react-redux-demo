import { connect } from 'react-redux';
import Controls from '../components/Controls.jsx';

const mapDispatchToProps = (dispatch) => ({
  updateCounter: (type) => dispatch({ type })
})

export default connect(null, mapDispatchToProps)(Controls);