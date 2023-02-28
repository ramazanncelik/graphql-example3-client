import { List } from 'antd';
import React from 'react'
import { useQuery } from '@apollo/client';
import { getEvents } from './queries';
import { Link } from 'react-router-dom';
import Event from './Event';
import Loading from '../../components/Loading';
import styles from './styles.module.css'



function Home() {

    const { loading, error, data } = useQuery(getEvents);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <div>Error {error}</div>
    }

    return (
        <List
            className="demo-loadmore-list"
            loading={false}
            itemLayout="horizontal"
            //loadMore={loadMore}
            dataSource={data.events}
            renderItem={(item) => (
                <Event eventData={item} />
            )}
        />
    )
}

export default Home