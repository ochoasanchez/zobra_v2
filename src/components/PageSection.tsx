import '../assets/main.scss';
import Divider from './Divider';

type PageSectionProps = {
    item: Item,
    imgPosition: 'top' | 'right' | 'left',
    imgSize?: 'large' | 'small',
}

const PageSection = ({item, imgPosition, imgSize}: PageSectionProps) => {

    const markup = { __html: item.content };
    const imgWidthClass = imgSize === 'small' ? 'w-36' : 'w-96'

    if (imgPosition === 'top') return (
        <>
            <Divider />
            <section className="page-section">
                <img className={`${imgWidthClass} mx-auto`} src={item.img.url} alt={item.img.alt} />
                <div dangerouslySetInnerHTML={markup} className='mt-6' />
            </section>
        </>
    );
    
    return (
        <>
            <Divider />
            <section className="page-section">
                <div className='flex gap-x-4'>
                    <img className={`w-3/6 ${imgPosition === 'left' ? 'order-1' : 'order-2'}`} src={item.img.url} alt={item.img.alt} />
                    <div dangerouslySetInnerHTML={markup} className={`w-3/6 ${imgPosition === 'right' ? 'order-1' : 'order-2'}`}/>
                </div>
            </section>
        </>
    );
}

export default PageSection;