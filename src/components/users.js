import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers, filterUser } from '../store/actions/usersActions';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  /**
   * Method to handle search for
   * the usernames
   * 
   */
  handleSearchChange(value) {
    this.props.actionFilterUser(value);
}

  componentDidMount() {
    const userName = this.props.user;
    this.props.fetchFollowers(userName);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      //   variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div>
        {this.props?.followers?.loading && 'Loading...'}
        {console.log('datat',this.props?.followers?.data)}
        {this.props?.followers?.data?.length >= 1 && (
          <Container maxWidth="md">
            <Slider {...settings}>
              {this.props?.followers?.data.map((u) => (
                <div key={u.id}>
                  <h3>
                    {u.login}
                    <img
                      src={u.avatar_url}
                      alt="Boy in a jacket"
                      width="200"
                      height="200"
                      className="center"
                    ></img>
                  </h3>
                </div>
              ))}
            </Slider>
          </Container>
        )}
        <Container maxWidth="md">
          <div className="searchUser__Container">
            <label>
              <input
                type="text"
                value={this.state.searchName}
                onChange={(e) => this.setState({searchName: e.target.value})}
              />
            </label>
            <div className="mr">
            <Button variant="contained" color="primary" onClick={() => this.handleSearchChange(this.state.searchName)}>Search Follower</Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

/**
 * function for the next arrow
 * in the slider
 * 
 */
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}
/**
 * function for the prev arrow
 * in the slider
 * 
 */
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}



const mapStateToProps = (state) => ({ followers: state.followers });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchFollowers: getUsers,
      actionFilterUser: filterUser
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
