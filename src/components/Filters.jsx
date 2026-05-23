import { Form, Link, useLoaderData } from "react-router-dom";
import { FormInput } from "./FormInput";
import { SelectInput } from "./SelectInput";
import { useRef, useState } from "react";
import { RangeInput } from "./RangeInput";
import { CheckboxInput } from "./CheckboxInput";

const sortOptions = ['a-z', 'z-a', 'high', 'low'];

export const Filters = () => {
  const {
      meta: {categories, companies},
      params: { search, company, category, order, shipping, price }
    } = useLoaderData();

  return (
    <Form className="grid grid-cols-4 gap-4 grid-rows-2 items-center bg-base-200 rounded px-10 py-3 mb-5">
      <FormInput title="Search Product" type="search" name="search" defaultValue={search} sizeClass="input-sm"/>
      <SelectInput title="Select Category" name="category" sizeClass="select-sm" options={categories} defaultValue={category} />
      <SelectInput title="Select Company" name="company" sizeClass="select-sm" options={companies} defaultValue={company} />
      <SelectInput title="Sort By" name="order" sizeClass="select-sm" options={sortOptions} defaultValue={order} />
      <RangeInput defaultValue={price} />
      <CheckboxInput title="Free Shipping" name="shipping" sizeClass="checkbox-sm" defaultValue={shipping} />

      <button
        className="btn btn-secondary uppercase btn-sm"
        type="submit"
      >Search</button>
      
      <Link
        to="/products"
        className="btn btn-warning uppercase btn-sm"
      >Reset</Link>
    </Form>
  );
};