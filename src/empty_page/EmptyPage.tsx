import style from './EmptyPage.module.css'

export const EmptyPage = () => {
    return (
        <div className={style.wrapper}>
          <div className={style.empty_wrapper}>Ведутся работы</div>
        </div>
    );
};