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

const articles = [
  {
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    author: "BBC News",
    title: "'Stop threatening Taiwan', its new president William Lai tells China",
    description: "He urged Beijing to replace confrontation with dialogue, shortly after being sworn in on Monday.",
    url: "https://www.bbc.co.uk/news/world-asia-69036373",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/11E92/production/_133326337_gettyimages-2153272090.jpg",
    publishedAt: "2024-05-20T14:07:27.0327988Z",
    content: "Taiwan's newly inaugurated president William Lai has called on China to stop threatening the island and accept the existence of its democracy. \r\nHe urged Beijing to replace confrontation with dialogu… [+2123 chars]"
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    author: "BBC News",
    title: "Dali: Ship that hit Baltimore bridge on the move again",
    description: "The operation to move the Dali to a nearby terminal will take 21 hours, according to engineers.",
    url: "https://www.bbc.co.uk/news/world-us-canada-69039100",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/A0DE/production/_133328114_dalirefloat.jpg",
    publishedAt: "2024-05-20T14:07:24.814599Z",
    content: "The ship that slammed into the Francis Scott Key Bridge in Baltimore was re-floated on Monday after being stuck for nearly eight weeks.\r\nThe Dali was \"moved by tugboats under favourable environmental… [+1476 chars]"
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    author: "BBC News",
    title: "Did prosecutors make a strong case in Trump trial?",
    description: "As the prosecution's final witness testifies, legal experts assess the evidence so far and chances of a conviction.",
    url: "https://www.bbc.co.uk/news/world-us-canada-69030047",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/0048/production/_133327000_trump_trials_character_promo-3b-976.png",
    publishedAt: "2024-05-20T13:37:21.0324302Z",
    content: "His composure boosted the prosecutors' case, and his testimony was bolstered by a weak cross-examination from Mr Trump's legal team on day one, experts said. \r\nMr Trump's attorney, Todd Blanche, appe… [+1436 chars]"
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    author: "BBC News",
    title: "Norfolk couple in their 20s live like it is the 1940s",
    description: "They dress in traditional clothing every day, own vintage furniture and limit time with technology.",
    url: "https://www.bbc.co.uk/news/articles/cx030v84l3vo",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/639b/live/f9b170a0-15c9-11ef-9b12-1ba8f95c4917.jpg",
    publishedAt: "2024-05-20T13:22:17.7201746Z",
    content: "A couple in their 20s have decided to live their lives as if it were the 1940s.\r\nLiberty Avery, 24, and Greg Kirby, 29, from Ditchingham in Norfolk, dress in traditional clothing every day and own vi… [+198 chars]"
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    author: "BBC News",
    title: "Ukraine's Zelensky stays in power despite term expiring",
    description: "Martial law and a desire for stability keeps the Ukrainian leader in power without new elections.",
    url: "https://www.bbc.co.uk/news/articles/cn007p39zdzo",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/7660/live/37954030-168e-11ef-9b12-1ba8f95c4917.jpg",
    publishedAt: "2024-05-20T13:07:22.2992196Z",
    content: "Watching old footage of Mr Zelenksy being sworn in is like viewing a different Ukraine. The comedian-turned-president looks fresher faced. He enthusiastically greets crowds and even jumps to kiss a m… [+1358 chars]"
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    author: "BBC News",
    title: "Diddy apologises after attack on ex-girlfriend Cassie shown in video",
    description: "Footage obtained by CNN had shown him kicking and pushing Cassie Ventura in a hotel hallway in 2016.",
    url: "https://www.bbc.co.uk/news/articles/cyrr61417ylo",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/4e94/live/dde71480-15fe-11ef-9b12-1ba8f95c4917.jpg",
    publishedAt: "2024-05-20T13:07:21.0475418Z",
    content: "Sean \"Diddy\" Combs has apologised for attacking his ex-girlfriend Cassandra \"Cassie\" Ventura after CCTV footage showed him kicking and pushing her in a hotel hallway in 2016.\r\nSpeaking in a video pos… [+2361 chars]"
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    author: "BBC News",
    title: "Northern Lights expected soon as Sun drives stormy space weather",
    description: "Another spectacular light show could come within two weeks as Sun storms reach 11-year high.",
    url: "https://www.bbc.co.uk/news/articles/c163j8551ygo",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/0a46/live/e306d660-1475-11ef-a5f9-c9e97f2e93cf.jpg",
    publishedAt: "2024-05-20T13:07:16.4236908Z",
    content: "But we now have two things to help us - forecasting and preparation, explains Dr Elvidge. \r\nForecasters like Krista Hammond monitor satellites 24 hours a day for solar activity. \r\nThey issued alerts … [+1098 chars]"
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    author: "BBC News",
    title: "Iran crash: What next for Iran after President Ebrahim Raisi's death",
    description: "Raisi's death will test a system where hardliners dominate all branches of power, Lyse Doucet writes.",
    url: "https://www.bbc.co.uk/news/articles/c1dd99jgl09o",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/8405/live/4db67af0-1689-11ef-a5f9-c9e97f2e93cf.png",
    publishedAt: "2024-05-20T13:07:14.1273894Z",
    content: "Another critical position which must be filled is the seat held by this middle-ranking cleric on the Assembly of Experts, the body empowered to choose the new supreme leader, when that far more conse… [+1533 chars]"
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    author: "BBC News",
    title: "Assange wins right to challenge US extradition",
    description: "Assange wins right to challenge US extradition",
    url: "https://www.bbc.co.uk/news/articles/cw44l170xdwo",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/1007/live/6fabcad0-16a1-11ef-9b16-15114b27fe47.jpg",
    publishedAt: "2024-05-20T12:22:21.2050286Z",
    content: "Wikileaks founder Julian Assange can bring a new appeal against extradition to US, the High Court has ruled.\r\nHe was granted permission to appeal against the order that he be sent to the US to stand … [+988 chars]"
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    author: "BBC News",
    title: "ICC seeks arrest warrants for Netanyahu and top Hamas leaders",
    description: "ICC seeks arrest warrants for Netanyahu and top Hamas leaders",
    url: "https://www.bbc.co.uk/news/articles/c3ggpe3qj6wo",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/1a2d/live/537ff930-6139-11ee-b101-6f93d6dfbcc2.png",
    publishedAt: "2024-05-20T11:22:18.5948743Z",
    content: "This breaking news story is being updated and more details will be published shortly. Please refresh the page for the fullest version.\r\nYou can receive Breaking News on a smartphone or tablet via the… [+93 chars]"
  }
];



class Home extends Component{

  state = {articles:articles.slice(1), trendingOne:articles[0], activeTab:tabList[0].tabId, activeFooter:footerList[0].id, loading:true}

  // componentDidMount = ()=>{
  //   this.getData()
  // }

 // getData = async () => {
  //   const url = 'https://newsapi.org/v2/top-headlines?'+'sources=bbc-news&'+'apiKey=8527dd5d8acb42dbbbe0666e3eae3e2b';
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   console.log(data.articles)
  //   this.setState({articles:data.articles.slice(1), trendingOne:data.articles[0]})
  // }

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
{  this.renderAppData()}
      </div>
      <div className="suitable">
        <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1716213021/no_laptop_q64jzs.avif" className="pc-img" alt="no pc" />
        <h1 className="mobile">Best Suited for Mobile</h1>
      </div>
      </>
    )
  }
}

export default Home;
