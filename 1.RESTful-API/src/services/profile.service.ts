import fs from 'fs';

import { IProfile } from './../types/profile.type';
import dayjs from 'dayjs';

class profileService {
  async getProfiles() {
    let data = await this.getProfileData();
    data.forEach((profile) => {
      profile.password = undefined;
      profile.age = dayjs().diff(profile.dob, 'year');
    });
    return data;
  }

  async createProfile(profile: IProfile) {
    const data = await this.getProfileData();
    data.push(profile);
    await this.writeFile(data);
    return profile;
  }

  async updateProfile(id: string, payload: any) {
    const data = await this.getProfileData();
    data.forEach((profile) => {
      if (profile.id == id) {
        profile = { ...profile, ...payload };
      }
    });
    await this.writeFile(data);
    return payload;
  }

  async deleteProfile(id: string) {
    let data = await this.getProfileData();
    data = data.filter((profile) => profile.id !== id);
    await this.writeFile(data);
    return 'deleted';
  }

  getProfileData = async (): Promise<IProfile[]> => {
    const data = await fs.promises.readFile('./mockData.json', 'utf8');
    return JSON.parse(data);
  };

  writeFile = async (data) => {
    try {
      await fs.promises.writeFile('./mockData.json', JSON.stringify(data));
      return 'Written successfully';
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const ProfileService = new profileService();
