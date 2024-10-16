import ai from '../../assets/ai.png'
import market_insight from '../../assets/market_insight.png'
import seach_img from '../../assets/seach_img.png'
import trade from '../../assets/trade.png'
import wallet from '../../assets/wallet.png'

import './index.css'
import FeatureItem from '../FeatureItem'

const featuresList = [
    {
        id:1,
        title:'Trade Optimizer',
        details:'Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.',
        imgPath:trade
    },
    {
        id:2,
        title:'Market Insight',
        details:'Stay ahead of the market. Get real-time updates on market trends, track top traders\' movements, and spot signals from key influencers.',
        imgPath:market_insight
    },
    {
        id:3,
        title:'Risk Guard',
        details:'Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.',
        imgPath:ai
    },
    {
        id:4,
        title:'Portfolio Sync',
        details:'Easily manage your portfolio. You\'ll always know what you own, how it\'s performing, and where it\'s headed.',
        imgPath:wallet
    },
    {
        id:5,
        title:'Opportunity Scout',
        details:'Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.',
        imgPath:seach_img
    }
]

const Features = () => (
    <div className='feature-container'>
        <h1 className='feature-head'>Our Features</h1>
        <ul className='feature-list-container'>
            {featuresList.map(each=>(
                <FeatureItem key={each.id} data={each} />
            ))}
        </ul>
    </div>
)

export default Features