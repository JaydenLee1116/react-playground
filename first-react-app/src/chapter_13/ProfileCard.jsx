import Card from './Card';

function ProfileCard(props) {
  return (
    <Card title="제이든 최고" backgroundColor={'tomato'}>
      <h2>안녕하세요 제이든입니다. 만나서 반갑습니다.</h2>
      <h2>
        시작은 미비하지만, 언젠가 반드시 제가 그리는 그 모습이 올 것을 알고
        있습니다.
      </h2>
    </Card>
  );
}

export default ProfileCard;
