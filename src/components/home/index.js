import { Component } from "react";

import { FiSearch,FiLoader } from "react-icons/fi";
import { WiTime3 } from "react-icons/wi";
import { PiBell } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

import "./index.css"


const tabList = [
  {
    tabId:1,
    tabName:'All'
  },
  {
    tabId:2,
    tabName:'Sports'
  },
  {
    tabId:3,
    tabName:'Politics'
  },
  {
    tabId:4,
    tabName:'Bussiness'
  },
  {
    tabId:5,
    tabName:'Health'
  },
  {
    tabId:6,
    tabName:'Travel'
  },
  {
    tabId:7,
    tabName:'Science'
  },
  {
    tabId:8,
    tabName:'History'
  },
  
]

const footerList = [
  {
    icon: AiOutlineHome ,
    iconName:'Home',
    id:1
  },
  {
    icon: MdOutlineExplore ,
    iconName:'Explore',
    id:2
  },
  {
    icon: FaRegBookmark ,
    iconName:'Bookmark',
    id:3
  },
  {
    icon: VscAccount ,
    iconName:'Profile',
    id:4
  },
]

class Home extends Component{

  state = {articles:[], trendingOne:[], activeTab:tabList[0].tabId, activeFooter:footerList[0].id, loading:true}

  componentDidMount = ()=>{
    this.getData()
  }

  getData = async () => {
    const url = 'https://newsapi.org/v2/top-headlines?'+'sources=bbc-news&'+'apiKey=8527dd5d8acb42dbbbe0666e3eae3e2b';
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.articles)
    this.setState({articles:data.articles.slice(1), trendingOne:data.articles[0],  loading: false,})
  }

onClickTab = (id)=>{
  console.log(id)
  this.setState({activeTab:id})
}

onclickFooter = (id)=>{
  console.log(id)
  this.setState({activeFooter:id})

  if (id===4){
    this.props.history.push('./profile')
  }

}

timeAgo = (dateString) => {
  const now = new Date();
  const then = new Date(dateString);

  const diffInSeconds = Math.floor((now - then) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else {
    return `${diffInDays} days ago`;
  }
}

renderAppData = ()=>{
  const {articles, trendingOne, activeTab, activeFooter} = this.state
  return(
    <>
      <div className="nav-bar">
            <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1716115706/Untitled-removebg-preview_o7ixd9.png" className="nav-logo" alt="logo" />
            <button type="button" className="bell-btn">
            <PiBell size={24}/>
            </button>
        </div>
        <div className="search-container">
        <FiSearch size={24}/>
          <input type="search" className="search-input" />
          <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1716116605/icons8-slider-32_qvpkmi.png" className="filter-icon" alt="filter"/>
        </div>
        <div className="trend-text">
          <h1 className="trend">Trending</h1>
          <p className="see-all">See all</p>
        </div>
       <a target="_blank" className="a" href={trendingOne.url}> 
        <div className="trending-article">
          <img src={trendingOne.urlToImage} className="trend-img" alt='img'/>
          <p className="place">USA</p>
          <h2 className="title">{trendingOne.title}</h2>
          <div className="channel-time">
            <div className="text-dots">
            <div className="text-logo">
              <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1716187167/download_ncyc1y.png" className="bbc-logo" alt="bbc"/>
              <p className="author">{trendingOne.author}</p>
            </div>
            <div className="text-logo">
              <WiTime3 className="time-logo" size={22}/>
              <p className="time">{this.timeAgo(trendingOne.publishedAt)}</p>
            </div>
            </div>
            <p className="dots">...</p>
            </div>
        </div>
        </a> 
        <div className="trend-text">
          <h1 className="trend">Latest</h1>
          <p className="see-all">See all</p>
        </div>

        <ul className="tabs-container">
                {tabList.map(eachTab => (
                    <li className="tab" key={eachTab.tabId}>
                        <button
                            type="button"
                            className={activeTab === eachTab.tabId ? 'active-tab' : 'inactive-tab'}
                            onClick={() => this.onClickTab(eachTab.tabId)}>
                            {eachTab.tabName}
                        </button>
                    </li>
                ))}
            </ul>
                
            <ul className="article-container">
          {articles.map(eachArticle =>(
           <a target="_blank" className="a" href={eachArticle.url}>
            <li className="article-con">
              <img src={eachArticle.urlToImage} className="article-image"/>
              <div className="text-side">
              <p className="place">USA</p>
                  <h2 className="title">{trendingOne.title}</h2>
                  <div className="channel-time">
                    <div className="text-dots">
                    <div className="text-logo">
                      <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1716187167/download_ncyc1y.png" className="bbc" alt="bbc"/>
                      <p className="author">{trendingOne.author}</p>
                    </div>
                    <div className="text-logo">
                      <WiTime3 className="time-logo" size={22}/>
                      <p className="time">{this.timeAgo(trendingOne.publishedAt)}</p>
                    </div>
                    </div>
                    <p className="dots">...</p>
                  </div>  
              </div>
            </li>
           </a> 
          ))}
        </ul>  

        <div className="footer-container">
            {footerList.map(eachIcon=>(
              <div className="icon-name" onClick={()=>this.onclickFooter(eachIcon.id)}>
                <eachIcon.icon size={23} className={activeFooter === eachIcon.id ? 'active-footer-icon' : 'inactive-footer-icon'}/>
                <h1 className={activeFooter === eachIcon.id ? 'active-footer-name' : 'inactive-footer-name'}>{eachIcon.iconName}</h1>
              </div>  
            ))}
        </div>

   
    </>
  )
}

  render(){
    const {loading} = this.state


    return(
      <>
      <div className="app-container">
        {loading ? (
          <div className="loading-container">
            <FiLoader className="loading-icon" />
            <p>Loading...</p>
          </div>
        ) : this.renderAppData()}
      </div>
      <div className="suitable">
        <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1716213021/no_laptop_q64jzs.avif" className="pc-img" alt="no pc" />
        <h1 className="mobile">Best Suited for Mobile</h1>
      </div>
      </>
    )
  }
}

export default Home
