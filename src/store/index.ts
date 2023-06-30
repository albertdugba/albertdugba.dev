import { create } from "zustand";

type CompanyDataStore = {
  inViewCompany: string | null;
  setInViewCompany: (company: string | null) => void;
};

export const useCompanyStore = create<CompanyDataStore>((set) => ({
  inViewCompany: null,
  setInViewCompany: (company: any) => set({ inViewCompany: company }),
}));
