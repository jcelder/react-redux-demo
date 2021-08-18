import { connect } from 'react-redux';
import Display from '../components/Display.jsx';
import store from '../store/store.js';

const mapStateToProps = (state) => ({
  counter: state
})

export default connect(mapStateToProps)(Display);
