import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { appSt } from './style.css';

export const App = () => {
  return (
    <>
      <div className={appSt.bottomBtn}>
        <ButtonMobile href="alfabank://longread?endpoint=v1/adviser/longreads/14962" block={true} view="primary">
          Открыть брокерский счет
        </ButtonMobile>
      </div>
    </>
  );
};
