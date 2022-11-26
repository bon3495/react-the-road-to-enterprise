export type UserId = string;

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picture: string;
  location: string;
  occupation: string;
  viewedProfile: number;
  impressions: number;
  friends: UserId[];
};

export type Posts = {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  location: string;
  description: string;
  picturePath: string;
  userPicturePath: string;
  likes: number;
  comment: {
    userId: string;
    message: string;
  }[];
};
