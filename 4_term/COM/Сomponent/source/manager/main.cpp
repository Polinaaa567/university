#include <windows.h>
#include <stdio.h>

// DLL позволяет разделить код объекта на различные модули и загружать их динамически


typedef HRESULT __stdcall (*DllGetClassObjectType) (const CLSID& clsid, const IID& iid, void** ppv);

extern "C" __declspec(dllexport) HRESULT GetClassObject(const CLSID& clsid, const IID& iid, void** ppv)
{
    printf("Manager::GetClassObject\n");

    try
    {
      DllGetClassObjectType DllGetClassObject;

      HINSTANCE h;

      h=LoadLibrary("./build/server/main.dll");

      if (!h)
      {
        printf("!\n");
        throw "";
      }

      DllGetClassObject=(DllGetClassObjectType) GetProcAddress(h,"DllGetClassObject");

      if (!DllGetClassObject)
      {
        printf("!!\n");
        throw "";
      }
      return DllGetClassObject(clsid,iid,ppv);
    }
    catch (...)
    {
        return E_UNEXPECTED;
    }
}

BOOL APIENTRY DllMain(HINSTANCE hinstDLL, DWORD fdwReason, LPVOID lpvReserved)
{
    switch (fdwReason)
    {
        case DLL_PROCESS_ATTACH:
            // attach to process
            // return FALSE to fail DLL load
            break;

        case DLL_PROCESS_DETACH:
            // detach from process
            break;

        case DLL_THREAD_ATTACH:
            // attach to thread
            break;

        case DLL_THREAD_DETACH:
            // detach from thread
            break;
    }
    return TRUE; // succesful
}
