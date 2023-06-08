import Image from 'next/image';
import articleImg from '@/assets/images/article-photo.png';

export default function Article() {
  return (
    <article className="article">
      <Image src={articleImg} alt="article photo" className="article__photo" />
      <div className="article__body">
        <h3 className="article__title">Aliment bu, farzand oldidagi majburiyat</h3>
        <div className="article__caption">
          <span>571 kishi o‘qidi</span>
          <span>/</span>
          <span>22.05.2023</span>
        </div>
      </div>
    </article>
  );
}
