import { useRouter } from 'next/router';

const Redirect = () => {
  const router = useRouter();
  router.push('/pages');
  return null;
};

export default Redirect;
