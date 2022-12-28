import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { HeroProfile, MainPage, SearchPage } from './pages';
import { getHeros } from './store/actions/heros.action';
import { useAppDispatch } from './store/store';

function App(): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHeros());
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='heros'>
          <Route path='search' element={<SearchPage />} />
          <Route path=':name' element={<HeroProfile />} />
        </Route>
      </Route >
    </Routes>
  );
}

export default App;
