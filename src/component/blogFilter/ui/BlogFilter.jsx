import React, { useState } from 'react';
import classesForm from "./blogfilter.module.css"

const BlogFilter = ({ setSearchParams, postQuery, latest }) => {
    const [search, setSearch] = useState(postQuery);
    const [checked, setChecked] = useState(latest);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const query = form.search.value;
        const isLatest = form.latest.checked;

        const params = {}

        if (query.length) params.post = query;
        if (isLatest) params.latest = true;

        setSearchParams(params);
    }

    return (
        <form className={classesForm.blogForm} autoComplete="off" onSubmit={handleSubmit}>
            <input className={classesForm.searchInputFilter} type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <label style={{ padding: '0 1rem' }}>
                New only
                <input className={classesForm.checkboxFilter} type="checkbox" name="latest" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            </label>
            <input className={classesForm.filterInput} type="submit" name="Search" />
        </form>
    );
};

export { BlogFilter };
