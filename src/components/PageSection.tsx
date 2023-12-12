import '../assets/main.scss';
import Divider from './Divider';

type PageSectionProps = {
    item: Item,
    title?: string,
    imgPosition?: 'top' | 'right' | 'left',
    imgSize?: 'large' | 'small',
    showDivider?: boolean,
}

const PageSection = ({item, title, imgPosition, imgSize, showDivider = true}: PageSectionProps) => {

    const markup = { __html: item.content };
    const imgWidthClass = imgSize === 'small' ? 'w-36' : 'md:w-96';
    const shouldRenderDivider = showDivider === true;

    if (item.img && imgPosition === 'top') return (
        <>
            {shouldRenderDivider  && <Divider />}
            <section className="page-section">
                { title && <h1 className="text-center lg:text-left text-6xl my-12">{title}</h1> }
                <img className={`${imgWidthClass} mx-auto`} src={item.img.url} alt={item.img.alt} />
                <div dangerouslySetInnerHTML={markup} className='mt-6' />
            </section>
        </>
    );

    if (!item.img) return (
        <>
            {shouldRenderDivider  && <Divider />}
            <section className="page-section">
                { title && <h1 className="text-center lg:text-left text-6xl my-12">{title}</h1> }
                <div dangerouslySetInnerHTML={markup} className='md:w-4/5 my-24' />
            </section>
        </>
    );
    
    return (
        <>
            {shouldRenderDivider  && <Divider />}
            <section className="page-section">
                {title && <h1 className="text-center lg:text-left text-6xl my-12">{title}</h1>}
                <div className='flex flex-col md:flex-row gap-x-4 lg:gap-x-8 gap-y-4'>
                    <img className={`w-full md:w-3/6 ${imgPosition === 'left' ? 'order-1' : 'order-2'}`} src={item.img.url} alt={item.img.alt} />
                    <div dangerouslySetInnerHTML={markup} className={`w-full md:w-3/6 ${imgPosition === 'right' ? 'order-1' : 'order-2'}`}/>
                </div>
            </section>
        </>
    );
}

export default PageSection;