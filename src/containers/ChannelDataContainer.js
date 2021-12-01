import { connect } from 'react-redux';
import { setChannelData } from '../store/ChannelData/actions';
import ChannelData from '../components/Channel/ChannelData/ChannelData';

const mapStateToProps = (state) => ({
    data: state.channelData
});

export default connect(mapStateToProps, { setChannelData })(ChannelData);