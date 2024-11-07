import * as style from './index.css';
import Text from '@/src/components/typographies/Text';

type PageTemplateProps = {
  title?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  children?: React.ReactNode;
};

const PageTemplate = ({
  title,
  leftContent,
  rightContent,
  children
}: PageTemplateProps) => {
  return (
    <main className={style.container}>
      <div className={style.pageInner}>
        <div className={style.pageHeader}>
          <div className={style.leftContent}>
            {leftContent}
            {title && (
              <h1>
                <Text type={'heading3_700'} color={'GRAY_90'}>
                  {title}
                </Text>
              </h1>
            )}
          </div>

          {rightContent && <div className={style.rightContent}>{rightContent}</div>}
        </div>

        <div>{children}</div>
      </div>
    </main>
  );
};

export default PageTemplate;
