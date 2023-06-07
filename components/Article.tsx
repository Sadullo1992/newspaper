import Image from 'next/image';
import articleImg from '@/assets/images/article-photo.png';

export default function Article() {
  return (
    <article className="article">
      <Image src={articleImg} alt="article photo" className="article__photo" />
      <h3 className="article__title">
        O‘zbekiston va Singapur o‘rtasida 7 ta hamkorlik hujjati imzolandi
      </h3>
      <div className="article__caption">
        <span>571 kishi o‘qidi</span>
        <span>/</span>
        <span>22.05.2023</span>
      </div>
    </article>
  );
}
