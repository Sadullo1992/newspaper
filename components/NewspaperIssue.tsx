import NewspaperIssueItem from './NewspaperIssueItem';

export default function NewspaperIssue() {
  return (
    <div className="newspaper-issue">
      <h2 className="newspaper-issue__title">Gazetamizning nashrlari</h2>
      <p className="newspaper-issue__text">
        Bu yerda Bobotog‘ gazetasining barcha sonlarini yuklab olishingiz va elekron holatda
        o’qishingiz mumkin
      </p>
      <div className="newspaper-issue__grid">
        <NewspaperIssueItem />
        <NewspaperIssueItem />
        <NewspaperIssueItem />
        <NewspaperIssueItem />
        <NewspaperIssueItem />
        <NewspaperIssueItem />
      </div>
    </div>
  );
}
