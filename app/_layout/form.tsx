import Loading from '@/components/loading';
import useLoading from '@/hooks/use-loading';
import network from '@/network';
import css from '@/styles/home.module.scss';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
enum BHK {
  BHK1 = '1BHK',
  BHK2 = '2BHK',
  BHK3 = '3BHK',
  BHK4 = '4BHK',
}
enum Property {
  Aquaville = 'aquaville',
  Feet18 = '18 feet',
  Avana = 'avana',
  Rise = 'rise',
}

type State = {
  name: string;
  phone: string;
  email: string;
  property: string;
  bhk: string;
};

type SiteFormProps = {
  onClose: () => void;
};

const SiteForm = ({ onClose }: SiteFormProps) => {
  const { loading, onLoading } = useLoading();

  const onSubmit = React.useCallback(
    async (values: State) => {
      onLoading(true);
      try {
        const payload = {
          name: values.name,
          phone: values.phone,
          email: values.email,
          property: values.property,
          bhk: values.bhk,
        };

        const { data } = await network.post('/contact', payload);
        console.log(data);
        onLoading(false);
      } catch (error) {
        console.log(error);
        onLoading(false);
      }
    },
    [onLoading]
  );

  const { values, errors, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      property: Property.Aquaville,
      bhk: BHK.BHK1,
    },
    onSubmit,
  });

  return (
    <div className={css['site-form']}>
      <form onSubmit={handleSubmit}>
        <div className={css['close']} onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={30}
            width={30}
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path>
          </svg>
        </div>

        <h1>BOOK SITE VISIT</h1>
        

        <div className={css['form-fields']}>
          <div className={css['input-fields']}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={css['input-fields']}>
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              type="text"
              placeholder="Enter your number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          </div>

          <div className={css['form-fields']}>
          

          <div className={css['input-fields']}>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={css['input-fields']}>
            <label>Select Property*</label>
            <select name="property" id="property">
              {properties.map((property, index) => (
                <option key={index} value={property.value}>
                  {property.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={css['grid-single']}>
          <div className={css['input-fields']}>
            <label>Select BHK*</label>
            <select
              id="bhk"
              name="bhk"
              value={values.bhk}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {types.map((type, index) => (
                <option key={index} value={type.value}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-start my-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900  "
            >
              I hereby authorize to send notifications on SMS / Messages /
              Promotional / Informational messages
            </label>
          </div>

          <div className="flex justify-center  ">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5     flex items-center justify-center w-full"
            >
              {loading && <Loading />}
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
          {/* <div>
            <p className={css['last-line']}>
              *Read Our <span className={css['terms']}> Privacy Policy </span>{' '}
              and <span className={css['terms']}> Terms & Conditions</span>
            </p>
          </div> */}
          </div>
          <div>
            <p  className={css["form-footer"]}>
              *Read Our
              <Link
                href="/privacy-policy"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                {' '}
                Privacy Policy{' '}
              </Link>
              and
              <Link
                href="/terms-and-conditions"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                {' '}
                Terms & Conditions
              </Link>
            </p>
          
          </div>
        
      </form>
    </div>
  );
};
export default SiteForm;

const properties = [
  {
    name: 'Aquaville',
    value: Property.Aquaville,
  },
  {
    name: '18 feet',
    value: Property.Feet18,
  },
  {
    name: 'Avana',
    value: Property.Avana,
  },
  {
    name: 'Rise',
    value: Property.Rise,
  },
];

const types = [
  {
    name: '1 BHK',
    value: BHK.BHK1,
  },
  {
    name: '2 BHK',
    value: BHK.BHK2,
  },
  {
    name: '3 BHK',
    value: BHK.BHK3,
  },
  {
    name: '4 BHK',
    value: BHK.BHK4,
  },
];
