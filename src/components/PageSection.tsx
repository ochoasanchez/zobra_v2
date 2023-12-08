import '../assets/main.scss';
import Divider from './Divider';

type PageSectionProps = {
    item: Item,
    title?: string,
    imgPosition: 'top' | 'right' | 'left',
    imgSize?: 'large' | 'small',
    showDivider?: boolean,
}

const PageSection = ({item, title, imgPosition, imgSize, showDivider = true}: PageSectionProps) => {

    const markup = { __html: item.content };
    const imgWidthClass = imgSize === 'small' ? 'w-36' : 'w-96';
    const shouldRenderDivider = showDivider === true;

    if (imgPosition === 'top') return (
        <>
            {shouldRenderDivider  && <Divider />}
            <section className="page-section">
                {title && <h1 className="text-6xl my-12">{title}</h1>}
                <img className={`${imgWidthClass} mx-auto`} src={item.img.url} alt={item.img.alt} />
                <div dangerouslySetInnerHTML={markup} className='mt-6' />
            </section>
        </>
    );
    
    return (
        <>
            {shouldRenderDivider  && <Divider />}
            <section className="page-section">
                {title && <h1 className="text-6xl my-12">{title}</h1>}
                <div className='flex gap-x-4'>
                    <img className={`w-3/6 ${imgPosition === 'left' ? 'order-1' : 'order-2'}`} src={item.img.url} alt={item.img.alt} />
                    <div dangerouslySetInnerHTML={markup} className={`w-3/6 ${imgPosition === 'right' ? 'order-1' : 'order-2'}`}/>
                </div>
            </section>
        </>
    );
}

export default PageSection;