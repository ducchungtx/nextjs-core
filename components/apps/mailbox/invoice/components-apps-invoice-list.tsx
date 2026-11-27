'use client';
import IconEdit from '@/components/icon/icon-edit';
import IconEye from '@/components/icon/icon-eye';
import IconPlus from '@/components/icon/icon-plus';
import IconTrashLines from '@/components/icon/icon-trash-lines';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';

interface InvoiceItem {
    id: number;
    invoice: string;
    name: string;
    email: string;
    date: string;
    amount: string;
    status: { tooltip: string; color: string };
    profile: string;
}

const ComponentsAppsInvoiceList = () => {
    const [items, setItems] = useState<InvoiceItem[]>([
        {
            id: 1,
            invoice: '081451',
            name: 'Laurie Fox',
            email: 'lauriefox@company.com',
            date: '15 Dec 2020',
            amount: '2275.45',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 2,
            invoice: '081452',
            name: 'Alexander Gray',
            email: 'alexGray3188@gmail.com',
            date: '20 Dec 2020',
            amount: '1044.00',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 3,
            invoice: '081681',
            name: 'James Taylor',
            email: 'jamestaylor468@gmail.com',
            date: '27 Dec 2020',
            amount: '20.00',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 4,
            invoice: '082693',
            name: 'Grace Roberts',
            email: 'graceRoberts@company.com',
            date: '31 Dec 2020',
            amount: '344.00',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 5,
            invoice: '084743',
            name: 'Donna Rogers',
            email: 'donnaRogers@hotmail.com',
            date: '03 Jan 2021',
            amount: '405.15',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 6,
            invoice: '086643',
            name: 'Amy Diaz',
            email: 'amy968@gmail.com',
            date: '14 Jan 2020',
            amount: '100.00',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 7,
            invoice: '086773',
            name: 'Nia Hillyer',
            email: 'niahillyer666@comapny.com',
            date: '20 Jan 2021',
            amount: '59.21',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 8,
            invoice: '087916',
            name: 'Mary McDonald',
            email: 'maryDonald007@gamil.com',
            date: '25 Jan 2021',
            amount: '79.00',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 9,
            invoice: '089472',
            name: 'Andy King',
            email: 'kingandy07@company.com',
            date: '28 Jan 2021',
            amount: '149.00',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 10,
            invoice: '091768',
            name: 'Vincent Carpenter',
            email: 'vincentcarpenter@gmail.com',
            date: '30 Jan 2021',
            amount: '400',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 11,
            invoice: '095841',
            name: 'Kelly Young',
            email: 'youngkelly@hotmail.com',
            date: '06 Feb 2021',
            amount: '49.00',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 12,
            invoice: '098424',
            name: 'Alma Clarke',
            email: 'alma.clarke@gmail.com',
            date: '10 Feb 2021',
            amount: '234.40',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
    ]);

    const [pageSize, setPageSize] = useState(10);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [search, setSearch] = useState('');

    const filteredItems = useMemo(() => {
        const keyword = search.trim().toLowerCase();
        if (!keyword) {
            return items;
        }
        return items.filter(
            (item) =>
                item.invoice.toLowerCase().includes(keyword) ||
                item.name.toLowerCase().includes(keyword) ||
                item.email.toLowerCase().includes(keyword) ||
                item.date.toLowerCase().includes(keyword) ||
                item.amount.toLowerCase().includes(keyword) ||
                item.status.tooltip.toLowerCase().includes(keyword)
        );
    }, [items, search]);

    const deleteRow = (id: number | null = null) => {
        if (window.confirm('Are you sure want to delete selected row ?')) {
            if (id !== null) {
                setItems((prev) => prev.filter((user) => user.id !== id));
                setSelectedRowKeys((prev) => prev.filter((key) => key !== id));
                setSearch('');
            } else {
                const selectedSet = new Set(selectedRowKeys);
                setItems((prev) => prev.filter((d) => !selectedSet.has(d.id)));
                setSelectedRowKeys([]);
                setSearch('');
            }
        }
    };

    const columns: TableColumnsType<InvoiceItem> = [
        {
            title: 'Invoice',
            dataIndex: 'invoice',
            key: 'invoice',
            sorter: (a, b) => a.invoice.localeCompare(b.invoice),
            render: (invoice: string) => (
                <Link href="/apps/invoice/preview">
                    <div className="font-semibold text-primary underline hover:no-underline">{`#${invoice}`}</div>
                </Link>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            render: (name: string, record) => (
                <div className="flex items-center font-semibold">
                    <div className="w-max rounded-full bg-white-dark/30 p-0.5 ltr:mr-2 rtl:ml-2">
                        <img className="h-8 w-8 rounded-full object-cover" src={`/assets/images/profile-${record.id}.jpeg`} alt="" />
                    </div>
                    <div>{name}</div>
                </div>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email),
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => a.date.localeCompare(b.date),
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            align: 'right',
            sorter: (a, b) => parseFloat(a.amount) - parseFloat(b.amount),
            render: (amount: string) => <div className="text-right font-semibold">{`$${amount}`}</div>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            sorter: (a, b) => a.status.tooltip.localeCompare(b.status.tooltip),
            render: (status: InvoiceItem['status']) => <span className={`badge badge-outline-${status.color} `}>{status.tooltip}</span>,
        },
        {
            title: 'Actions',
            key: 'action',
            align: 'center',
            render: (_, record) => (
                <div className="mx-auto flex w-max items-center gap-4">
                    <Link href="/apps/invoice/edit" className="flex hover:text-info">
                        <IconEdit className="h-4.5 w-4.5" />
                    </Link>
                    <Link href="/apps/invoice/preview" className="flex hover:text-primary">
                        <IconEye />
                    </Link>
                    <button type="button" className="flex hover:text-danger" onClick={() => deleteRow(record.id)}>
                        <IconTrashLines />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="panel border-white-light px-0 dark:border-[#1b2e4b]">
            <div className="invoice-table">
                <div className="mb-4.5 flex flex-col gap-5 px-5 md:flex-row md:items-center">
                    <div className="flex items-center gap-2">
                        <button type="button" className="btn btn-danger gap-2" onClick={() => deleteRow()}>
                            <IconTrashLines />
                            Delete
                        </button>
                        <Link href="/apps/invoice/add" className="btn btn-primary gap-2">
                            <IconPlus />
                            Add New
                        </Link>
                    </div>
                    <div className="ltr:ml-auto rtl:mr-auto">
                        <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>

                <div className="px-5">
                    <Table<InvoiceItem>
                        rowKey="id"
                        dataSource={filteredItems}
                        columns={columns}
                        rowSelection={{
                            selectedRowKeys,
                            onChange: (keys) => setSelectedRowKeys(keys),
                        }}
                        scroll={{ x: 'max-content' }}
                        pagination={{
                            pageSize,
                            pageSizeOptions: [10, 20, 30, 50, 100],
                            showSizeChanger: true,
                            onShowSizeChange: (_, size) => setPageSize(size),
                            showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ComponentsAppsInvoiceList;
