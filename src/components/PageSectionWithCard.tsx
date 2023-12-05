import '../assets/main.scss';
import Divider from './Divider';

type PageSectionWithCardProps = {
    item: Item,
    imgPosition: 'left' | 'right',
}

const PageSectionWithCard = ({item, imgPosition}: PageSectionWithCardProps) => {

    const markup = { __html: item.content };
    
    return (
        <>
            <Divider />
            <section className="page-section">
                <div className='flex'>
                    <img className={`w-3/6 ${imgPosition === 'left' ? 'order-1' : 'order-2'}`} src={item.img.url} alt={item.img.alt} />
                    <div dangerouslySetInnerHTML={markup} className={`px-8 w-3/6 bg-black text-white flex text-center justify-center items-center ${imgPosition === 'right' ? 'order-1' : 'order-2'}`}/>
                </div>
            </section>
        </>
    );
}

export default PageSectionWithCard;