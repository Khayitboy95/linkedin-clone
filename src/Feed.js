import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import React from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'


const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type='submit' >Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title='Photo' Icon={ImageIcon} color='#70B5F9' />
                    <InputOption title='Video' Icon={SubscriptionsIcon} color='#e7a33e' />
                    <InputOption title='Event' Icon={EventNoteIcon} color='#c0cbcd' />
                    <InputOption title='Write article' Icon={CalendarViewDayIcon} color='#7fc15e' />
                </div>
            </div>
            <Post name='Khayitboy Ergashev' description="This is a test" message='Wow this worked' />
        </div>
    )
}

export default Feed;