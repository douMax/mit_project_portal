import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersData } from "../../redux/authRedux/actions";

const getDate = (date) => {
    return new Date(date).toLocaleString();
}

const columns = [
    {
        title: 'Username',
        width: 100,
        dataIndex: 'username',
        key: 'username',
        fixed: 'middle',
    },
    {
        title: 'role',
        width: 100,
        dataIndex: 'role',
        key: 'role',
        fixed: 'left',
    },
    {
        title: 'created on',
        dataIndex: "createdAt",
        key: '1',
        width: 150,
        fixed: 'left',
        render: ((date) => getDate(date))
    },
]

const Admin_Dashboard = () => {

    const { all_users } = useSelector(state => state.auth);

    return (
        <div>
            <h1>Existed Users</h1>
            {all_users && (
                <Table columns={columns} dataSource={all_users} scroll={{ x: 0, y: 450 }} />
            )}
        </div>
    )
}

export default Admin_Dashboard;