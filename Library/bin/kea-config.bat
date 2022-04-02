@echo off

IF "%1"=="" (
   echo kea-config.bat [OPTIONS]
   echo Options:
   echo     [--prefix]
   echo     [--version]
   echo     [--libs]
   echo     [--cflags]
   echo     [--includes]
   EXIT /B 1
) ELSE (
:printValue
    if "%1" neq "" (
	    IF "%1"=="--prefix" echo C:/Users/RICHARD/.conda/envs/st-lefmap/Library
	    IF "%1"=="--version" echo 1.4.14
	    IF "%1"=="--cflags" echo -IC:/Users/RICHARD/.conda/envs/st-lefmap/Library/include
	    IF "%1"=="--libs" echo -LIBPATH:C:/Users/RICHARD/.conda/envs/st-lefmap/Library/lib kea.lib 
	    IF "%1"=="--includes" echo C:/Users/RICHARD/.conda/envs/st-lefmap/Library/include
		shift
		goto :printValue
    )
	EXIT /B 0
)
