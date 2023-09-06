import { t } from 'i18next';
import '#styles/error.scss';

const Error = () => (
  <div className="error">
    <p className="error__message">{ t('error.not_defined') }</p>
  </div>
);

export { Error };
