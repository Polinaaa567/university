#ifndef Interfaces_H_INCLUDED
#define Interfaces_H_INCLUDED

#include <windows.h>

const IID IID_IUnknown = {0x00000000,0x0000,0x0000,{0xC0,0x00,0x00,0x00,0x00,0x00,0x00,0x46}};
const IID IID_IClassFactory = {0x00000001,0x0000,0x0000,{0xC0,0x00,0x00,0x00,0x00,0x00,0x00,0x46}};

const IID IID_IGet_Array = {0x00000101,0x0000,0x0000,{0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x46}};
const IID IID_ISample_Processing = {0x00000102,0x0000,0x0000,{0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x46}};

// IID это идентификаторы интерфейса, которые объект поддерживает  
class ISample_Processing: public IUnknown {
	public:
	 virtual void __stdcall Sample_Average()=0;  //выборочное среднее
	 virtual void __stdcall Sample_Variance()=0; //выборочная дисперсия
	 virtual void __stdcall Corrected_Sample_Variance()=0; //исправленная выборочная дисперсия 
};


//интерфейс с методами для считывания из файла
class IGet_Array: public IUnknown {
	public: 
	 virtual void __stdcall InputMas2() = 0;
	 virtual void __stdcall InputMas1() = 0;
};

#endif // Interfaces_H_INCLUDED