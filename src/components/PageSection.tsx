import '../assets/main.scss';
import './Divider'
import Divider from './Divider';


const PageSection = ({item, imgPosition}: {item: Item, imgPosition: 'top' | 'right' | 'left'}) => {
    const markup = { __html: item.content };
    if (imgPosition === 'top') return (
        <>
            <Divider />
            <section className="md:w-4/5 3xl:w-3/5 mt-6 py-6 mx-auto">
                <img className="w-96 mx-auto" src={item.img.url} alt={item.img.alt} />
                <div dangerouslySetInnerHTML={markup} className='py-6' />
            </section>
        </>
    );
    
    return (
        <>
            <Divider />
            <section className="md:w-4/5 3xl:w-3/5 mt-16 py-6 mx-auto">
                <div className='flex gap-x-4'>
                    <img className={`w-3/6 ${imgPosition === 'left' ? 'order-1' : 'order-2'}`} src={item.img.url} alt={item.img.alt} />
                    <div dangerouslySetInnerHTML={markup} className={`w-3/6 ${imgPosition === 'right' ? 'order-1' : 'order-2'}`}/>
                </div>
            </section>
        </>
    );
}

export default PageSection;