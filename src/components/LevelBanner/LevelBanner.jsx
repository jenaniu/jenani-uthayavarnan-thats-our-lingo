import './LevelBanner.scss'

function LevelBanner({ language, level, levelBannerClass }) {

    return (
        <div className={`level ${levelBannerClass}`}>
            <h5 className='level__banner'>{`${language} Level: ${level}`}</h5>
        </div>
    )
}

export default LevelBanner